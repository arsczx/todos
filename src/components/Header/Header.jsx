import './Header.css'

const Header = (props) => {
    return <header>
        Что нужно сделать ({props.compleateTodos}/{props.todosLen})
    </header>
}

export default Header