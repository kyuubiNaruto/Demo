#!/usr/bin/ruby

require 'nokogiri'
require 'open-uri'
require 'pry'

doc = Nokogiri::HTML(open("https://www.google.com/search?num=1&q=linux"))

doc.css('h3.ellip').each do |results|
    puts results.text
end