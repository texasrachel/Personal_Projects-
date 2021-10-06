class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project, include: :items
  end

  # POST /projects
  def create
    @project = Project.new(project_params)
    @project.user = @current_user

    if @project.save
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  # add items to projects
  def add_items_to_projects
    @projects = Project.find(params[:id])
    @items = Item.find(prarams[:item_id])

    @project.items << @items

    render json: @projects, include: :items
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:name, :item_id, :user_id, :img_url, :description, :category, :instructions_link, :for, :notes)
    end
end