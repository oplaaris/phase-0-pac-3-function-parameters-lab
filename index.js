function introduction(name ){
    console.log("Hi, my name is ${name} .");
}
introduction('Victor')

function introductionWithLanguage(name, language) {
    console.log("Hi, my name is ${name} and I am learning to program in ${language} .");
}
introductionWithLanguage('Victor','JavaScript')

  function introductionWithLanguageOptional(name, language  = "JavaScript") {
    console.log("Hi, my name is ${name} and I am learning to program in ${language}.");
  }
  introductionWithLanguageOptional('Victor')  
