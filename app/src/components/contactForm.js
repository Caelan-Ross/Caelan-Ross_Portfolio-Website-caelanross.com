import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "../styles/contactForm.css"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });


    // Shows alert message for form submission feedback
    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        // Hide alert after 5 seconds
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                "service_am3pm6d",
                "template_zt0o7i3",
                templateParams,
                "DwHZcS0TXC7xPA8xH"
            );

            // Display success alert
            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            // Display error alert
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            // Re-enable form submission
            setDisabled(false);
            // Reset contact form fields after submission
            reset();
        }
    };

    return (
        <div className='ContactForm'>
            <div className='container'>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="wrapper">
                                    <div class="row no-gutters">
                                        <div class="col-md-6 d-flex align-items-stretch">
                                            <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                                                <div id="form-message-warning" class="mb-4"></div>
                                                <div id="form-message-success" class="mb-4">
                                                    Your message was sent, thank you!
                                                </div>
                                                <form id="contactForm" name="contactForm" class="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input
                                                                    type='text'
                                                                    name='name'
                                                                    class="form-control"
                                                                    id="name"
                                                                    {...register('name', {
                                                                        required: { value: true, message: 'Please enter your name' },
                                                                        maxLength: {
                                                                            value: 30,
                                                                            message: 'Please use 30 characters or less'
                                                                        }
                                                                    })}
                                                                    className='form-control formInput'
                                                                    placeholder='Name'
                                                                ></input>
                                                                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input
                                                                    type='email'
                                                                    class="form-control"
                                                                    name="email"
                                                                    id="email"
                                                                    {...register('email', {
                                                                        required: true,
                                                                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                                    })}
                                                                    className='form-control formInput'
                                                                    placeholder='Email Address'
                                                                ></input>
                                                                {errors.email && (
                                                                    <span className='errorMessage'>Please enter a valid email address</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <input
                                                                    type='text'
                                                                    class="form-control"
                                                                    name="subject"
                                                                    id="subject"
                                                                    {...register('subject', {
                                                                        required: { value: true, message: 'Please enter a subject' },
                                                                        maxLength: {
                                                                            value: 75,
                                                                            message: 'Subject cannot exceed 75 characters'
                                                                        }
                                                                    })}
                                                                    className='form-control formInput'
                                                                    placeholder='Subject'
                                                                ></input>
                                                                {errors.subject && (
                                                                    <span className='errorMessage'>{errors.subject.message}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <textarea
                                                                    name='message'
                                                                    class="form-control"
                                                                    id="message"
                                                                    cols="30"
                                                                    rows="6"
                                                                    {...register('message', {
                                                                        required: true
                                                                    })}
                                                                    className='form-control formInput'
                                                                    placeholder='Message'
                                                                ></textarea>
                                                                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <button class="btn btn-primary" type='submit'>
                                                                    Submit
                                                                </button>
                                                                <div class="submitting"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-md-6 d-flex align-items-stretch">
                                            <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                                                <h3>Contact Information</h3>
                                                <p class="mb-4">Reach out for potential business inquiries.</p>
                                                <div class="dbox w-100 d-flex align-items-center">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <span class="fa fa-phone"></span>
                                                    </div>
                                                    <div class="text pl-3">
                                                        <p><span>Phone:</span> <a href="tel://1234567920">+1 (780) 554-8861</a></p>
                                                    </div>
                                                </div>
                                                <div class="dbox w-100 d-flex align-items-center">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <span class="fa fa-paper-plane"></span>
                                                    </div>
                                                    <div class="text pl-3">
                                                        <p><span>Email:</span> <a
                                                            href="mailto:info@yoursite.com">caelan.ross@gmail.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {alertInfo.display && (
                <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                    role='alert'
                >
                    {alertInfo.message}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={() =>
                            setAlertInfo({ display: false, message: '', type: '' })
                        } // Clear the alert when close button is clicked
                    ></button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;