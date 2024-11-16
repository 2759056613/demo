import { Button, Space } from 'antd'
import { useState } from 'react'
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmapgl'

function App() {
  const citys = [
    {
      id: 1,
      lng: 121.524059,
      lat: 38.855887,
      name: '大连',
      title: '千锋教育(大连校区)',
      address: '辽宁省大连市甘井子区爱贤街10号大连设计城6号a座9楼',
    },
    {
      id: 2,
      lng: 123.452518,
      lat: 41.717778,
      name: '沈阳',
      title: '千锋教育(沈阳校区)',
      address: '辽宁省沈阳市浑南区世纪路19号东大自动化大厦b园',
    },
  ]
  const [city, setCity] = useState(citys[0])
  const handleClick = (name) => {
    setCity(citys.find((item) => item.name === name))
  }
  return (
    <div>
      hello App
      <Map
        center={{ lng: city.lng, lat: city.lat }}
        zoom="16"
      >
        <Marker position={{ lng: city.lng, lat: city.lat }} />
        <NavigationControl />
        <InfoWindow
          position={{ lng: city.lng, lat: city.lat }}
          text={city.address}
          title={city.title}
        />
      </Map>
      <Space>
        {citys.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </Space>
    </div>
  )
}
export default App
