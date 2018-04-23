class Board < ApplicationRecord
  has_many :lists

  validates_uniqueness_of :slug

  before_create :set_slug

  private

  def set_slug
    loop do
      self.slug = SecureRandom.base58(10)
      break unless Board.where(slug: slug).exists?
    end
  end
end
