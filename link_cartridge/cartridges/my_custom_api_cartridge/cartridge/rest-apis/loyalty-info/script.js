exports.getLoyaltyInfo = function () {
    const greeting = {
        hello: 'world!',
    };
    response.setContentType('application/json');
    response.getWriter().println(JSON.stringify(greeting));
};

exports.getLoyaltyInfo.public = true;
