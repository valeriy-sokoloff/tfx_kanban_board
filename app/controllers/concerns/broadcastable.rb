module Broadcastable
  extend ActiveSupport::Concern

  included do
    after_action :broadcast_the_board
  end

  private
  def broadcast_the_board
    json = Api::V1::BoardsController.render(:show,
                                            assigns: {
                                              board: @board,
                                              lists: @board.lists,
                                              cards: @board.cards
                                            })
    Rails.logger.info "CARDS COUNT >>>>>>>>>>> #{@board.cards.count}"

    ActionCable.server.broadcast(
      "board_channel_#{@board.slug}", json)
  end
end