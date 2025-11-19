
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/self-service/iteration-1/poa-or-lpa', function(request, response) {

    var poaEpa = request.session.data['poa-epa']
    if (poaEpa == "yes-epa"){
        response.redirect("/self-service/iteration-1/kickout/epa-process")
    } else if (poaEpa == "yes-poa"){
        response.redirect("/self-service/iteration-1/kickout/poa-process")
    } else if (poaEpa == "no"){
        response.redirect("/self-service/iteration-1/guardian-deputyship")
    }
})

router.post('/self-service/iteration-1/guardian-deputyship', function(request, response) {

    var guardianDeputy = request.session.data['guardian-deputyship']
    if (guardianDeputy == "deputyship"){
        response.redirect("/self-service/iteration-1/kickout/deputyship-process")
    } else if (guardianDeputy == "scottish-guardianship"){
        response.redirect("/self-service/iteration-1/kickout/scottish-process")
    } else if (guardianDeputy == "no"){
        response.redirect("/self-service/iteration-1/assessed-hcp")
    }
})

router.post('/self-service/iteration-1/assessed-hcp', function(request, response) {

    var assessedHcp = request.session.data['assessed-hcp']
    if (assessedHcp == "yes"){
        response.redirect("/self-service/iteration-1/appointee-application")
    } else if (assessedHcp == "no") {
        response.redirect("/self-service/iteration-1/managing-affairs")
    }
})

router.post('/self-service/iteration-1/managing-affairs', function(request, response) {

    var helpManaging = request.session.data['help-managing-affairs']
    if (helpManaging == "yes"){
        response.redirect("/self-service/iteration-1/appointee-application")
    } else if (helpManaging == "no") {
        response.redirect("/self-service/iteration-1/kickout/contact-DWP")
    }
})