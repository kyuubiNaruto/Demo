#!/usr/bin/ruby

require 'nokogiri'
require 'open-uri'
require 'net/http'

#http = Net::HTTP.new("google.com", 80)
#req = Net::HTTP::Get.new("/path/to/the/page.html", {'User-Agent' => 'your_agent'})
#response = http.request(req)
#puts response.body



#puts "Enter the search word"
#search = gets

link = "https://www.google.com/search?num=10&q="

doc = Nokogiri:: HTML(open("https://www.bing.com/search?q=linux&num=10"))

s = doc.xpath('//@href').each do |results|
     puts results.text
end