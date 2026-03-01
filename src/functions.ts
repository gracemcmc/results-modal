
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

function get_duplicates(arr_of_dicts: any) {
  let election_options = [''];
  let duplicates = [''];
  for (var i = 0; i < arr_of_dicts.length; i++) {
    //cnm is the unique race name
    var candidate = arr_of_dicts[i].bnm;
    if (!(election_options.includes(candidate))) {
      election_options.push(candidate);
    }
    else if (!(duplicates.includes(candidate)))
      {duplicates.push(candidate);}
  }
  return duplicates;
}

export async function GetResultsNCSBE(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status: {$response.status}');
      }
      const result = await response.json();
      //const duplicates_removed = eatDelete(result);
      const parsed_results = results_parser(result);
      return parsed_results;
    } catch (e: any) {
      console.error(e.message, url);
    };
  }

function eatDelete(results_table: {[key:string]: string}[]) {
//TODO: make a function which returns only the largest value (statewide) when duplicate entries
  const proper = results_table.filter((entry) => 
    (entry.cid == "0") || !((get_duplicates(results_table)).includes(entry.cnm)));
// something here in the filtering is not working but I don't know what. The cid filter is fine
  console.log(proper);
  return proper;
}

function results_parser(results_table: {[key:string]: string}[]) {
	const new_array = [];
  for (var p of results_table) {
  	for (let i = 0; i < p.length; i++) {
      let new_dictionary = {
          race: "",
          candidate: "",
          votes: "",
          percent: "",
          lid: "",
          cid: ""
        }
        new_dictionary.race = p[i].cnm;
        new_dictionary.candidate = p[i].bnm;
        new_dictionary.votes = p[i].vct;
        new_dictionary.percent = p[i].pct;
        new_dictionary.lid = p[i].lid;
        new_dictionary.cid = p[i].cid;
        new_array.push(new_dictionary);
      }
  	}
	return new_array;
}