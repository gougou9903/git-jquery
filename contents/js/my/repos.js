function myRepos(){

    // display my repos in #list
    // e.g., https://api.github.com/users/doubleshow/repos

    $.get("https://api.github.com/users/doubleshow/repos", github, function(data) {
      var repos = data

      $.get("/git-jquery/templates/myrepoList.jade", function(template) {
        var html = jade.render(template, {items: repos})

        $("#list").html(html)

        myRepo(repos[0].full_name)

      })

    })
}