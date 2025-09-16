export function problem(n: number): string {
  // 문제
  // 개미 수열
  // 양의 정수 n이 주어질 때, n번째 항(Ln)의 자릿수 중 가운데 두 자리 수(m)를 출력합니다.
  // (단, 첫 번째 항은 1이고, 입력 값 n은 3보다 크고 100보다 작습니다.)

  if (n < 4 || n > 100) {
    throw new Error("입력 값 n은 3보다 크고 100보다 작습니다.");
  }

  // 첫 항은 "1"로 시작한다.
  let term: string = "1";

  for (let i = 2; i <= n; i++) {
    let nextTerm: string = "";
    let count: number = 1;

    for (let j = 0; j < term.length; j++) {
      if (term[j] === term[j + 1]) {
        count++;
      } else {
        nextTerm += count.toString() + term[j];
        count = 1;
      }
    }

    term = nextTerm;
  }

  const length: number = term.length;
  // 두 자리 수를 출력하기 위해 가운데 왼쪽부터 시작할 수 있도록 인덱스 지정
  const middleIdx: number = Math.floor(length / 2) - 1;

  return term.substring(middleIdx, middleIdx + 2);
}
