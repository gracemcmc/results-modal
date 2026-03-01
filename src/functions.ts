
 type County = {
  bct: number;
  bpt: string;
  cid: number;
  cnm: string;
  imp: string;
  ppt: string;
  prt: number;
  ptl: number;
  rtl: number;
  sub: string;
  tle: string;
  vwp: string;
};

export async function GetResultsNCSBE(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status: {$response.status}');
      }
      const result = await response.json();

      const parsed_results = results_parser(result);
      return parsed_results;
    } catch (e: any) {
      console.error(e.message, url);
    };
  }


function results_parser(results_table: {[key:string]: string}[]) {
	const new_array = [];
	for (let p = 0; p < results_table.length; p++) {
    //we have to do a second for loop now because of the way the tables are concatenated 
    //in AWS. p is basically pagination
    for (let i = 0; i < results_table[p].length; i++) {
          let new_dictionary = {
        race: "",
        candidate: "",
        votes: "",
        percent: "",
        lid: "",
      }
        new_dictionary.race = results_table[p][i].cnm;
        new_dictionary.candidate = results_table[p][i].bnm;
        new_dictionary.votes = results_table[p][i].vct;
        new_dictionary.percent = results_table[p][i].pct;
        new_dictionary.lid = results_table[p][i].lid;
        new_array.push(new_dictionary);
    }
	}
	return new_array;
}