import React from 'react'

class PPEmailSignup extends React.Component {
  render() {
    return (
      <>
        <h3 className="has-text-centered has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          Sign up for THE SLICE, our monthly newsletter
        </h3>
        <section className="section">
          <div className="container">
            <div className="content">
              {/* <h1>Sign up for THE SLICE, our monthly newsletter</h1> */}
              <form
                name="contact"
                method="post"
                action="/signup"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                // onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field"  /> {/* onChange={this.handleChange} */}
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      // onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      // onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit" 
                      style={{
                        backgroundColor: 'rgb(171, 33, 33)',
                        borderColor: 'black',
                        hoverBackgroundColor: 'rgb(0, 0, 0)'
                    }}>
                    Add me!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default PPEmailSignup