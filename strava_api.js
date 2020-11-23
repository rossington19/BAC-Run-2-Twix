const auth_link = "https://www.strava.com/oauth/token";

function getActivites(res){
    var accessToken = res.access_token;
    const activities_link = "https://www.strava.com/api/v3/clubs/774881/activities?per_page=250&access_token=" + accessToken;
    fetch(activities_link)
        .then(res => res.json())
            // .then(res => getUniqueAthletes(res))
            .then(res => populateResults(res))
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '56077',
            client_secret: '9dfdae7c15424f6a96de053a0f995a13acc1ad8f',
            refresh_token: 'b1cc9ed140427b230f40c3f181cf5a888f18c5f4',
            grant_type: 'refresh_token'
        })
    })
    .then(res => res.json())
        .then(res => getActivites(res))
      
}


