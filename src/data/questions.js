// SAMPLE PRACTICE MATERIAL written for this prototype. Not official exam questions.
export const tracks=[{id:'aptitude',name:'General aptitude'},{id:'nqt',name:'NQT-style practice'},{id:'infytq',name:'InfyTQ-style practice'}];
export const questions=[
{id:'a1',track:'aptitude',q:'A train 150 m long passes a pole in 10 seconds. What is its speed in km/h?',o:['45','54','60','72'],a:1,why:'150 m in 10 s is 15 m/s. Multiply by 3.6 to get 54 km/h.'},
{id:'a2',track:'aptitude',q:'What comes next: 2, 6, 12, 20, 30, ?',o:['40','42','44','36'],a:1,why:'Differences grow by 2 each time (4, 6, 8, 10), so the next difference is 12 and the term is 42.'},
{id:'n1',track:'nqt',q:'What is the output of console.log(typeof null) in JavaScript?',o:['"null"','"undefined"','"object"','"number"'],a:2,why:'typeof null returns "object", a long-standing quirk of the language.'},
{id:'n2',track:'nqt',q:'Which data structure gives first-in, first-out access?',o:['Stack','Queue','Tree','Heap'],a:1,why:'A queue removes the oldest item first. A stack removes the newest.'},
{id:'i1',track:'infytq',q:'Which SQL clause filters rows after GROUP BY has been applied?',o:['WHERE','HAVING','ORDER BY','LIMIT'],a:1,why:'HAVING filters groups. WHERE filters individual rows before grouping.'},
{id:'i2',track:'infytq',q:'What is the time complexity of binary search on a sorted array of n items?',o:['O(n)','O(log n)','O(n log n)','O(1)'],a:1,why:'Each step halves the search range, so about log n steps are needed.'}];
