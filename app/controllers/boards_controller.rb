# frozen_string_literal: true

class BoardsController < ApplicationController
  def index; end

  def show
    @board = Board.where(slug: params.require(:slug)).first
  end

  def create
    @board = Board.create
    redirect_to board_path(@board.slug)
  end
end
