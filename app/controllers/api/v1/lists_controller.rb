class Api::V1::ListsController < ActionController::API
  include SetBoard
  include Broadcastable

  def create
    @board = Board.where(slug: params.require(:board_slug)).first
    @board.lists.create

    render json: :ok
  end

  def destroy
    @board = Board.where(slug: params.require(:board_slug)).first
    @list = @board.lists.where(id: params[:id]).first
    @list.destroy

    render json: :ok
  end
end