
json.board_slug @board.slug

json.lists @lists do |list|
  json.id list.id
end

json.cards @cards do |card|
  json.id card.id
  json.list_id card.list_id
  json.title card.title
end