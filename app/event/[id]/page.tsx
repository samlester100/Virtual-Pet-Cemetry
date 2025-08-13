interface Props { params: { id: string } }

export default function EventPage({ params }: Props) {
  const { id } = params;
  const demoVideo = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "https://www.youtube.com/embed/dQw4w9WgXcQ";
  return (
    <div className="card">
      <h1>Online Funeral — {id}</h1>
      <p className="small">Replace this embed with Mux Live (recommended) or Zoom SDK when you add keys.</p>
      <div style={{position:'relative', paddingTop:'56.25%', borderRadius:12, overflow:'hidden', boxShadow:'0 8px 24px rgba(0,0,0,.25)'}}>
        <iframe
          src={demoVideo}
          title="Funeral Livestream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{position:'absolute', inset:0, width:'100%', height:'100%', border:'0'}}
        />
      </div>
      <h3 style={{marginTop:16}}>Programme</h3>
      <ul>
        <li>Welcome &amp; Opening words</li>
        <li>Photo slideshow &amp; music</li>
        <li>Shared stories</li>
        <li>Moment of silence</li>
        <li>Closing tribute</li>
      </ul>
    </div>
  );
}
