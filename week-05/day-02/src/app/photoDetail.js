var React = require('react');

var PhotoDetail = React.createClass({
    render:function(){
        return (
            <div className="contentContainer">
                <h1>{this.props.value.title}</h1>
                <p>{this.props.value.content}</p>
            </div>
        );
    }
});

module.exports = PhotoDetail;