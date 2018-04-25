class Api::V1::CardsController < ActionController::API
  include SetBoard
  include Broadcastable

  def create
    @list = @board.lists.where(id: params.require(:list_id)).first

    @list.cards.create(title: params.require(:title))
  end

  def update
    @card = @board.cards.where(id: params[:id]).first
    @card.update_attributes( params.require(:card).permit(:title, :list_id) )
  end

  def destroy
    @list = @board.lists.where(id: params[:list_id]).first
    @card = @list.cards.where(id: params[:id]).first

    @card.destroy
  end
end