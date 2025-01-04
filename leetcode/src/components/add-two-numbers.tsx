class ListNodeI {
  val: number;
  next: ListNodeI | null;
  constructor(val?: number, next?: ListNodeI | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

const readList = (list:ListNodeI|null) => {
  const listArr = [];
  let cur = list;
  while(cur){
    listArr.push(cur?.val as number);
    cur= cur?.next as (ListNodeI | null);
  }
  listArr.reverse();
  return BigInt(listArr.join(''));
};

const numToList = (num:bigint):ListNodeI => {
  const numArr = num.toString().split('');
  let last:ListNodeI|null = null;
  numArr.map((a)=>{
    const cur = new ListNodeI(Number(a),last);
    last = cur;
    return cur;
  });
  return last as unknown as ListNodeI;
};
  
  
const addTwoNumbers = function(l1:ListNodeI, l2:ListNodeI) {
  const l1N = readList(l1);
  const l2N = readList(l2);
  const result = l1N+l2N;
  const last = numToList(result);
  console.log( {l1N,l2N,result,a:readList(last)});
  return last;
  //return new ListNode(5);

};
 

const AddTwoNumbers = () => {
  const bigNumber = BigInt([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].join(''));
  console.log('bigNumber',bigNumber);
  const t1 =  numToList(bigNumber);
  //numToList(342);
  const t2 = numToList(465n);
  return <>
    {readList(addTwoNumbers(t1,t2)).toString()}
  </>;
};




export default AddTwoNumbers;