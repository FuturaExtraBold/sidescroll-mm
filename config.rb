activate :directory_indexes
activate :asset_hash, :exts => [".jpg", ".gif", ".png", ".webp", ".svg", ".css", ".js", ".mp4", ".ogv"], :ignore => [%r{^images/favicons/favicon-192.png}]

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
