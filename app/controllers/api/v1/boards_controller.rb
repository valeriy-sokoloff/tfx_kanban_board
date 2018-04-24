class Api::V1::BoardsController < ActionController::API
  def show
    @board = Board.where(slug: params.require(:slug)).first
    @lists = @board.lists.includes(:cards)
    @cards = @lists.map(&:cards).flatten
  end
end