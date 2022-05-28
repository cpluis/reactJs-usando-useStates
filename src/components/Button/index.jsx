import './style.css'

export const Button = ({ passandoAfuncao, disabled }) => {
    return (
        <div className="button-container">
            <button 
            disabled={disabled}
            className='button'
            onClick={passandoAfuncao}>
                Load more post
            </button>
        </div>
    )
}