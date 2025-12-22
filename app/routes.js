
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/self-service/iteration-1/individual-org', function(request, response) {

    var role = request.session.data['individual-org']
    if (role == "personal-rel"){
        response.redirect("/self-service/iteration-1/poa-or-lpa")
    } else if (role == "corp-org"){
        response.redirect("/self-service/iteration-1/kickout/cab")
    } 
})

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
    } else if (guardianDeputy == "guardianship"){
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
        response.redirect("/self-service/iteration-1/need-fulltime-help")
    } else if (helpManaging == "no") {
        response.redirect("/self-service/iteration-1/help-communicating")
    }
})

router.post('/self-service/iteration-1/need-fulltime-help', function(request, response) {

    var helpCommunicating = request.session.data['fulltime-help']
    if (helpCommunicating == "all-time"){
        response.redirect("/self-service/iteration-1/appointee-application")
    } else if (helpCommunicating == "some-time") {
        response.redirect("/self-service/iteration-1/kickout/implicit-alternate-enq")
    }
})

router.post('/self-service/iteration-1/help-communicating', function(request, response) {

    var helpCommunicating = request.session.data['help-communicating']
    if (helpCommunicating == "adjustments-needed"){
        response.redirect("/self-service/iteration-1/kickout/reasonable-adjustment")
    } else if (helpCommunicating == "none-needed") {
        response.redirect("/self-service/iteration-1/kickout/dwp-enquiry")
    }
})