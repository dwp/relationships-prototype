
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// End an Appointee V1

router.post('/remove-appointee/iteration-1/rel-details-landing-v2', function(request, response) {

    var role = request.session.data['endRelationship']
    if (role == "yes"){
        response.redirect("/remove-appointee/iteration-1/end-reason")
    } else if (role == "no"){
        response.redirect("/remove-appointee/iteration-1/searchlight/search")
    } 
})

router.post('/remove-appointee/iteration-1/end-reason', function(request, response) {

    var role = request.session.data['endReason']
    if (role == "death"){
        response.redirect("/remove-appointee/iteration-1/end-date")
    } else if (role == "higher-priority"){
        response.redirect("/remove-appointee/iteration-1/end-summary")
    } else if (role == "relinquishment"){
        response.redirect("/remove-appointee/iteration-1/end-summary")
    } else if (role == "financial abuse"){
        response.redirect("/remove-appointee/iteration-1/end-summary")
    } 
})

router.post('/remove-appointee/iteration-1/end-date', function(request, response) {

    var role = request.session.data['end-date']
    if (role == "today"){
        response.redirect("/remove-appointee/iteration-1/end-summary")
    } else if (role == "different"){
        response.redirect("/remove-appointee/iteration-1/end-date-manual")
    } 
})

// End an Appointee V2
router.post('/remove-appointee/iteration-2/end-reason', function(request, response) {
     var role = request.session.data['end-reason']
    if (role == "Appointee has died"){
        response.redirect("/remove-appointee/iteration-2/end-date-manual")
    } else if (role == "Customer has a legal authority"){
        response.redirect("/remove-appointee/iteration-2/end-summary")
    } else if (role == "Appointee has been relinquished"){
        response.redirect("/remove-appointee/iteration-2/end-summary")
    } else if (role == "Appointee has been revoked"){
        response.redirect("/remove-appointee/iteration-2/end-summary")
    } 
})

// End an Appointee V3
router.post('/remove-appointee/iteration-3/end-reason', function(request, response) {
     var role = request.session.data['end-reason']
    if (role == "Appointee has died"){
        response.redirect("/remove-appointee/iteration-3/end-date-death")
    } else if (role == "Legal authority in place"){
        response.redirect("/remove-appointee/iteration-3/end-date-la")
    } else if (role == "Appointee has ended the relationship"){
        response.redirect("/remove-appointee/iteration-3/end-date-apt-ended")
    } else if (role == "Unacceptable behaviour"){
        response.redirect("/remove-appointee/iteration-3/end-date-behaviour")
    } else if (role == "Claimant can act for themselves"){
        response.redirect("/remove-appointee/iteration-3/end-date-can-act")
    } 
})

router.post('/remove-appointee/iteration-3/end-date', function(request, response) {

    var role = request.session.data['end-date']
    if (role == "today"){
        response.redirect("remove-appointee/iteration-3/end-summary")
    } else if (role == "different-day"){
        response.redirect("/remove-appointee/iteration-3/end-date-manual")
    } 
})

router.post('/remove-appointee/iteration-3/end-date-death', function(request, response) {

    var role = request.session.data['end-date-death']
    if (role == "today"){
        response.redirect("/remove-appointee/iteration-3/end-summary")
    } else if (role == "different-day"){
        response.redirect("/remove-appointee/iteration-3/end-date-death-manual")
    } 
})

// --------------------------------------------------------------
// Add a PAB - generic
router.post('/pab/add-pab/person-found', function(request, response) {

    var role = request.session.data['correctPerson']
    if (role == "yes"){
        response.redirect("/pab/add-pab/start-date")
    } else if (role == "no"){
        response.redirect("/pab/add-pab/pab-details")
    } 
})

router.post('/pab/add-pab/start-date', function(request, response) {

    var role = request.session.data['start-date']
    if (role == "today"){
        response.redirect("/pab/add-pab/relationship-summary")
    } else if (role == "different-day"){
        response.redirect("/pab/add-pab/start-date-manual")
    } 
})

// Remove a PAB - generic
router.post('/pab/remove-pab/end-date', function(request, response) {

    var role = request.session.data['end-date']
    if (role == "today"){
        response.redirect("/pab/remove-pab/end-summary")
    } else if (role == "different-day"){
        response.redirect("/pab/remove-pab/end-date-manual")
    } 
})



// --------------------------------------------------------------
// ACS team self service add an appointee

router.post('/self-service/iteration-1/individual-org', function(request, response) {

    var role = request.session.data['individual-org']
    if (role == "personal-rel"){
        response.redirect("/self-service/iteration-1/epa")
    } else if (role == "corp-org"){
        response.redirect("/self-service/iteration-1/epa")
    } 
})

router.post('/self-service/iteration-1/epa', function(request, response) {

    var poaEpa = request.session.data['epa']
    if (poaEpa == "yes-epa"){
        response.redirect("/self-service/iteration-1/lpa-financial")
    } else if (poaEpa == "no"){
        response.redirect("/self-service/iteration-1/no-epa-lpa-financial")
    }
})

router.post('/self-service/iteration-1/lpa-financial', function(request, response) {

    var lpa = request.session.data['lpa']
    if (lpa == "yes-lpa"){
        response.redirect("/self-service/iteration-1/kickout/lpa-process")
    } else if (lpa == "no-epa"){
        response.redirect("/self-service/iteration-1/kickout/epa-process")
    }
})

router.post('/self-service/iteration-1/no-epa-lpa-financial', function(request, response) {

    var noEpa = request.session.data['no-epa-lpa']
    if (noEpa == "yes-lpa"){
        response.redirect("/self-service/iteration-1/kickout/lpa-process")
    } else if (noEpa == "no-lpa"){
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
        response.redirect("/self-service/iteration-1/help-everything")
    }
})

router.post('/self-service/iteration-1/help-everything', function(request, response) {

    var helpEverything = request.session.data['help-everything']
    if (helpEverything == "yes-some"){
        response.redirect("/self-service/iteration-1/managing-affairs")
    } else if (helpEverything == "no") {
        response.redirect("/self-service/iteration-1/appointee-application")
    }
})

router.post('/self-service/iteration-1/managing-affairs', function(request, response) {

    var helpManaging = request.session.data['help-managing-affairs']
    if (helpManaging == "yes"){
        response.redirect("/self-service/iteration-1/kickout/implicit-alternate-enq")
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


router.post('/appointee/remove/end-date', function(request, response) {

    var endDate = request.session.data['end-date']
    if (endDate == "today"){
        response.redirect("/appointee/remove/end-summary")
    } else if (endDate == "different") {
        response.redirect("/appointee/remove/end-date-manual")
    }
})
