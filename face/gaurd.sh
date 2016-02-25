guard 'shell' do
  watch(%r{^resources/(.*)/(.*)\.html$}) {|m| `touch src/clj/face/core.clj` }
  end
