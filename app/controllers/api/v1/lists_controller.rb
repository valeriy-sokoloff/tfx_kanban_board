class Api::V1::ListsController < ActionController::API
  def create
    @board = Board.where(slug: params.require(:board_slug)).first
    @board.list.create

    render json: :ok
  end

  def destroy
    @board = Board.where(slug: params.require(:board_slug)).first
    @list = @board.lists.where(id: params.require(:id))
    @list.destroy

    render json: :ok
  end
end