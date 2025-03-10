'use client'

import { Button } from "@/components/ui/button";
export default  function TestDownload() {
  const handleDownload = async () => {
    // const link = document.createElement('a')
    // document.body.appendChild(link)
    // const response = await fetch('http://localhost:8080/api/download?url=https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F463345115_934290348748147_6898052195124540909_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26_nc_cat%3D107%26_nc_oc%3DQ6cZ2AEaKB1OznfjEVMlKJhdKdluPAdE1utbGtfT0fZ6IG1hqfXQ2LZnGC979vQDJtKge7Y%26_nc_ohc%3DenMsVB2NE9oQ7kNvgGWtGgB%26_nc_gid%3Da1b6c2d8eaff4f4f93784642289c93fb%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_AYFmWW7Yi3hBSmfmbBBW0Dcx5Naa2Iyv0KH0zCdqvIQj5g%26oe%3D67D484BC%26_nc_sid%3D10d13b')
    // // const response = await fetch('https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/463345115_934290348748147_6898052195124540909_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2AEaKB1OznfjEVMlKJhdKdluPAdE1utbGtfT0fZ6IG1hqfXQ2LZnGC979vQDJtKge7Y&_nc_ohc=enMsVB2NE9oQ7kNvgGWtGgB&_nc_gid=a1b6c2d8eaff4f4f93784642289c93fb&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYFmWW7Yi3hBSmfmbBBW0Dcx5Naa2Iyv0KH0zCdqvIQj5g&oe=67D484BC&_nc_sid=10d13b')
    // const blob = await response.blob()
    // const b = new Blob([blob], { type: 'image/jpeg' })
    // link.href = URL.createObjectURL(b)
    // link.setAttribute('download', 'test')
    // link.click()
    // document.body.removeChild(link)
    downloadFile(
      'https://scontent-iad3-1.cdninstagram.com/o1/v/t16/f2/m86/AQOqLdaNdPWnTQIPVYQXD9zLYzW7vRNXmfHidQ962_wYUlmdfwQpZ8w7L_zynBQE6pz00FFOrjWA5gLbIqChvnloil3dsByeotMeZ7I.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzEuNzIwLmJhc2VsaW5lIn0&_nc_cat=110&vs=9813543265345906_2814157849&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xODRFNTgxNjhEQzE3ODVDQzI5NzBDOUVFNkI5QkE4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEQ0kwUndDMHNWMjV1QUJBRXBWSXk4QmNDMURicV9FQUFBRhUCAsgBACgAGAAbABUAACb6mav348qrQBUCKAJDMywXQCEAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&_nc_rid=7f425ed60e&ccb=9-4&oh=00_AYFv4VQPiNigjtkP4z4tacjy0xugJ1rVAuiRYhBYG9VvDg&oe=67D0B178&_nc_sid=10d13b',
      // 'http://localhost:8080/api/download?url=https%3A%2F%2Fscontent-iad3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F463345115_934290348748147_6898052195124540909_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dscontent-iad3-1.cdninstagram.com%26_nc_cat%3D107%26_nc_oc%3DQ6cZ2AEaKB1OznfjEVMlKJhdKdluPAdE1utbGtfT0fZ6IG1hqfXQ2LZnGC979vQDJtKge7Y%26_nc_ohc%3DenMsVB2NE9oQ7kNvgGWtGgB%26_nc_gid%3Da1b6c2d8eaff4f4f93784642289c93fb%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26oh%3D00_AYFmWW7Yi3hBSmfmbBBW0Dcx5Naa2Iyv0KH0zCdqvIQj5g%26oe%3D67D484BC%26_nc_sid%3D10d13b', 
      'test'
      )

  }

  const downloadFile = (url: string, downloadName: string) => {
    const link = document.createElement('a');
    fetch(url).then(res => res.blob()).then((blob) => {
      let bl = new Blob([blob], {
        type: "video/mp4",
      })
      link.href = URL.createObjectURL(bl);
      link.download = downloadName + '.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  
  return <Button onClick={handleDownload}>Test Download1</Button>
}
