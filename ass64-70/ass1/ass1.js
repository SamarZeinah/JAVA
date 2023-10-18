                function getDetails(zName, zAge, zCountry) {
                function namePattern(zName) {
                    let fname=zName.substr(0,5);
                    let lname= zName.substr(6,1).toUpperCase();
                    return `Hello ${fname}${lname}.`;
                  // Osama Mohamed => Osama M.
                  // Ahmed ali => Ahmed A.
                }
                function ageWithMessage(zAge) {
                    let age=zAge.split("");
                    return`Your age is${age[0]}`;
                  // 38 Is My Age => Your Age Is 38
                  // 32 Is The Age => Your Age Is 32
                }
                function countryTwoLetters(zCountry) {
                    let Count=zCountry.substr(0,2).toUpperCase();
                    return`You Live in${Count}`;
                  // Egypt => You Live In EG
                  // Syria => You Live In SY
                }
                function fullDetails() {
                    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, 
                    ${countryTwoLetters(zCountry)}`;
                }
                return fullDetails(); // Do Not Edit This
              }
              
              console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
              // Hello Osama M., Your Age Is 38, You Live In EG
              
              console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
              // Hello Ahmed A., Your Age Is 32, You Live In SY