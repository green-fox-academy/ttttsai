var React = require('react');

var SearchBar = React.createClass({
    handleKeyPress: function(e) {
        if (e.key === 'Enter') {
            this.props.searchPhotoName(this.refs.inputValue.value);
        }
    },
    handleLoseFocus:function(){
        this.props.searchPhotoName(this.refs.inputValue.value);
    },
    render:function(){
        return (
            <div>
                <input type="search" onBlur={this.handleLoseFocus} onKeyPress={this.handleKeyPress} ref="inputValue"/>
            </div>
        );
    }
});

module.exports = SearchBar;