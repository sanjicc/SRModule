var body = $response.body.replace(/vip":0/g, 'vip":1').replace(/svip":0/g, 'svip":1').replace(/vip_endtime":"0/g, 'vip_endtime":"2800000000').replace(/svip_endtime":"0/g, 'svip_endtime":"2800000000')
$done({ body });