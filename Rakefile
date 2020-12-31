desc "Draft new blog"
task :draft, [:name] do |t, args|
  # puts args.name
  sh "bundle exec jekyll draft #{args.name}"
end

desc "Build"
task :build do
  sh "bundle exec jekyll build --incremental"
end

task :add do
  sh "cd _site; git add .; cd .."
end

task commit: :add do
  sh "cd _site; git commit -a; cd .."
end

task :push do
  sh "cd _site; git push origin main; cd .."
end
