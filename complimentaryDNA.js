// const DNAStrand = (dna) => {
//   let newDNA = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       newDNA += "T";
//     }
//     if (dna[i] === "T") {
//       newDNA += "A";
//     }
//     if (dna[i] === "G") {
//       newDNA += "C";
//     }
//     if (dna[i] === "C") {
//       newDNA += "G";
//     }
//   }
//   return newDNA;
// };

const DNAStrand = dna => dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
