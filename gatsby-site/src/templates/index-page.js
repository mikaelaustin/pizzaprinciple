import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(0, 0, 0) 0.5rem 0px 0px, rgb(0, 0, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 0, 0)',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-centered has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(0, 0, 0) 0.5rem 0px 0px, rgb(0, 0, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 0, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  {/* <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div> */}
                  <div className="tile" 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                  }}>
                  </div>
                </div>
                <div> {/* sign up form is this div */}
                  <BlogRoll />
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
                </div>
                {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
