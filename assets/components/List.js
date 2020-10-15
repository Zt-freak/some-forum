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
                <div key={this.state.categories[i].id}>
                    {this.state.categories[i].name}
                </div>
            )
        }

        return (
            <>
                {categoriesJSX}
            </>
        )
    }
}

export default List