import './Header.css'

function Header(){

    return(<div className='navbar'>

        <h1 className='heading'>SimpleAsThat</h1>

        <ul className='tabs'>
            <li>
                <button className='pill' type='button'>About</button>
            </li>
            <li>
                <button className='pill' type='button'>Login</button>
                
            </li>
        </ul>
    </div>
    )



}



export default Header