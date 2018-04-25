module SetBoard
  extend ActiveSupport::Concern

  included do
    before_action :set_board
  end

  private
  def set_board
    @board = Board.where(slug: params.require(:board_slug)).first
  end
end