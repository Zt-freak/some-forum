import React from 'react'

class List extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount () {
        fetch(`/api/${this.props.type}`, {
            method: 'GET'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({
                categories: data.data
            })
        })
    }

    render () {
        let categoriesJSX = []

        for (let i = 0; i < this.state.categories.length; i++) {
            categoriesJSX.push(
                <a href={`/category/${this.state.categories[i].id}`} key={this.state.categories[i].id}>
                    <div className="category-container">
                        {this.state.categories[i].name}
                    </div>
                </a>
            )
        }

        return (
            <div className="category-list">
                <h1>The Message Board</h1>
                <p>Select category:</p>
                {categoriesJSX}
            </div>
        )
    }
}

export default List