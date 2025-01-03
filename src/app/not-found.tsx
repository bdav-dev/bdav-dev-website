
export default function NotFound() {
    return (
        <div style={{
            backgroundColor: '#000000',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
        }}>
            <h1 style={{
                borderRight: '1px solid rgba(255, 255, 255, .3)',
                display: 'inline-block',
                margin: '0 20px 0 0',
                padding: '0 23px 0 0',
                fontSize: '24px',
                fontWeight: '500',
                verticalAlign: 'top',
                lineHeight: '49px'
            }}>
                404
            </h1>
            <div style={{ display: 'inline-block' }}>
                <h2 style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '49px',
                    margin: 0
                }}>
                    This page could not be found.
                </h2>
            </div>
        </div>
    );
}
