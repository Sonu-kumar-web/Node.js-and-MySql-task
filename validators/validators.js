// for validation of data
module.exports.validation = (req) => {
   return dataValidation(req);
};

// Data mandatory validation
dataValidation = (req) => {
   const { firstName, panCard, DOB, gender, email, profileImage } = req.body;
   let input = /^(?!\s*$).+/;
   if (
      input.test(firstName) &&
      input.test(panCard) &&
      input.test(DOB) &&
      input.test(gender) &&
      input.test(email) &&
      input.test(profileImage)
   ) {
      return panCardValidation(req);
   } else {
      return "Please enter the all data input";
   }
};

//  PAN Card Validation
panCardValidation = (req) => {
   const { panCard } = req.body;
   var cardNum = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
   if (panCard.length < 10 || panCard.length > 10) {
      return "Your PAN card number must have 10 characters";
   } else if (cardNum.test(panCard)) {
      return DOBValidation(req);
   } else {
      return {
         Error: "Please enter valid PAN card number (Follow Hint)",
         Hint: {
            1: "It should be ten characters long.",
            2: "The first five characters should be any upper case alphabets.",
            3: "The next four-characters should be any number from 0 to 9.",
            4: "The last(tenth) character should be any upper case alphabet.",
            5: "It should not contain any white spaces.",
            example: "BNZAA2318J",
         },
      };
   }
};

//  DOB Validation
DOBValidation = (req) => {
   const { DOB } = req.body;
   let date = /^\d{4}-\d{2}-\d{2}$/;
   if (DOB.match(date)) {
      return URLValidation(req);
   } else {
      return "Please enter the DOB in yyyy-mm-dd format";
   }
};

// URL Validation
URLValidation = (req) => {
   const { profileImage } = req.body;
   let url = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
   if (url.test(profileImage)) {
      return true;
   } else {
      return "Please enter the valid URL for profile Image";
   }
};
