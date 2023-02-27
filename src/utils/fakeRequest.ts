// ----------------------------------------------------------------------

export default function fakeRequest(time: number = 500) {
  return new Promise((res) => setTimeout(res, time));
}
