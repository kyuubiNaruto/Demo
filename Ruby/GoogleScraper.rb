require 'nokogiri'
require 'open-uri'
require 'pry'

puts "Enter a search phrase"
search = gets

doc = Nokogiri::HTML(open('https://www.google.com/search?num=11&q='+search))

doc.xpath('//a/div[@class="BNeawe vvjwJb AP7Wnd"]').each do |r|
    puts ""
    puts r.text
end