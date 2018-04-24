class Api::V1::CardsController < ActionController::API
  def destroy
    @board = Board.where(slug: params.require(:board_slug)).first
    @list = @board.lists.where(id: params[:list_id]).first
    @card = @list.cards.where(id: params[:id]).first

    @card.destroy

    render json: :ok
  end
end