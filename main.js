const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  function pAequorFactory(specimenNum,dna) {
      return {
          _specimenNum: specimenNum,
          _dna: dna,

          // Step 4 from project - randomly select a base in the object's dna property and changing the current base to a different base.
          
          mutate () {
              let indexBaseChanged = Math.floor((Math.random() * dna.length));
              let newArray = [...this._dna];             
              let oldBase = dna[indexBaseChanged];
              let newBase;
              switch (oldBase) {
                case 'A':
                    newBase = 'T';
                    break;
                case 'T':
                    newBase = 'A';
                    break;
                case 'C':
                    newBase = 'G';
                    break;
                case 'G':
                    newBase = 'C';
                    break;
              };

              newArray.splice(indexBaseChanged,1,newBase)

              return newArray;
          },

        // Step 5 from project - compare Dna Array and log coincident percentage 
        
        compareDNA(pAequor) {
          let coincidentBases = [];
          let numCoincidentBases = 0;
          for (let i = 0; i < 15 ; i++) {
            let j = -1;
            j++
            if (this._dna[i] === pAequor._dna[i]) {
              coincidentBases.push([[i] , this._dna[i]]);
              numCoincidentBases++
            };
          };
          console.log(" ")
          console.log("... The scanning test were completed...")
          console.log(" ")
          console.log(" Coincident bases are listed below ") 
          console.log(" ")
          console.log(coincidentBases);
          console.log(" ")
          console.log(" ")
          let percentageResult  = numCoincidentBases / 15 * 100
          console.log("Match percentage = " + percentageResult + '%')
          console.log(" ")
          console.log(" ")
        },
        
        
        willLikelySurvive() {
          let occurrenciesDNA = 0;
          for (let i = 0; i < this._dna.length; i++) {
            console.log('  ')
            console.log('               i = ' + i + '            occurrenciesDNA = ' + occurrenciesDNA);
            console.log('  ')
            console.log('this._dna[i] =   ' + this._dna[i])
            console.log('  ')
            if (this._dna[i] == 'C' || this._dna[i] == 'G' ) {
             occurrenciesDNA++
             console.log('occurrencies DNA added');
             console.log('  ')
            };
          }
          let percentageResult = occurrenciesDNA / 15
          console.log('percentageResult =' + percentageResult)
          if (percentageResult >= 0.6 ) {
            return true;
          } else {
            return false;
          };
        }, 
      };
  };

  let newSensientBeing = pAequorFactory(123,mockUpStrand());
  let anotherSensientBeing = pAequorFactory(321,mockUpStrand());
  
  console.log(newSensientBeing._dna);
  newSensientBeing.willLikelySurvive()
  




 /*  test .mutate()
let newSensientBeing = pAequorFactory(123,mockUpStrand());
let anotherSensientBeing = pAequorFactory(321,mockUpStrand());
newSensientBeing.mutate()
*/


/*
console.log(newSensientBeing);
console.log(anotherSensientBeing);
newSensientBeing.compareDNA(anotherSensientBeing);
*/
