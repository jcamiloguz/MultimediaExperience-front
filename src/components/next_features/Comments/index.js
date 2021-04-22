import React from 'react'

import './index.scss'

class CommentBox extends React.Component {
  constructor() {
    super()

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: 'Andres',
          body:
            'La experiencia me parfce muy creativa y deseo aprender sobre diseño',
        },
      ],
    }
  }

  render() {
    const comments = this._getComments()
    let commentNodes
    let buttonText = 'Mostrar comentarios'

    if (this.state.showComments) {
      buttonText = 'Ocultar Comentarios'
      commentNodes = <div className="comment-list">{comments}</div>
    }

    return (
      <div className="comments">
        <div className="nes-container is-rounded ">
          <h2>Brindanos tu Opinión sobre la experiencia!</h2>
          <CommentForm addComment={this._addComment.bind(this)} />
          <button
            id="comment-reveal"
            onClick={this._handleClick.bind(this)}
            className="nes-btn is-primary comment__btn"
          >
            {buttonText}
          </button>
          <h3>Comentarios</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>
      </div>
    )
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
    }
    this.setState({ comments: this.state.comments.concat([comment]) }) // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    })
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      )
    })
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet'
    } else if (commentCount === 1) {
      return '1 comentario'
    } else {
      return `${commentCount} comentarios`
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input
            className="nes-input comment_item"
            placeholder="Nombre"
            required
            ref={(input) => (this._author = input)}
          ></input>
          <br />
          <textarea
            className="nes-textarea comment_item"
            placeholder="Comentario"
            rows="2"
            required
            ref={(textarea) => (this._body = textarea)}
          ></textarea>
          <div className="comment-form-actions">
            <button type="submit" className="nes-btn is-success">
              Comentar
            </button>
          </div>
        </div>
      </form>
    )
  } // end render

  _handleSubmit(event) {
    event.preventDefault() // prevents page from reloading on submit
    let author = this._author
    let body = this._body
    this.props.addComment(author.value, body.value)
  }
} // end CommentForm component

class Comment extends React.Component {
  render() {
    return (
      <>
        <div className="nes-container with-title is-rounded comments__user">
          <p className="title">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a
              href="#"
              className="comment-footer-delete"
              onClick={this._deleteComment}
            >
              Eliminar Comentario
            </a>
          </div>
        </div>
      </>
    )
  }
  _deleteComment() {
    this.props.body = 0
  }
}

export default CommentBox
