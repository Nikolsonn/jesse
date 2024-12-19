import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Input, FileInput, Card } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';

const PreviewCard: React.FC<{ title: string; description: string; price: string; file: File | null }> = ({ title, description, price, file }) => {
    return (
        <Card style={{ marginTop: '20px', padding: '15px' }}>
            <h3>Preview</h3>
            {title && <p><strong>Title:</strong> {title}</p>}
            {description && <p><strong>Description:</strong> {description}</p>}
            {price && <p><strong>Price:</strong> ${price}</p>}
            {file && (
                <div>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '10px' }}
                    />
                </div>
            )}
        </Card>
    );
};

const AdSendRequestPage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        setPrice(value);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting:', { title, description, price, file });
        setIsSubmitted(true);
    };

    const handleReturnToUserPage = () => {
        navigate('/ad-board-page'); // Adjust this path as needed
    };

    const showPreview = title || description || price || file;

    if (isSubmitted) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Success!</h2>
                <p>Your Ad request has been sent successfully.</p>
                <Button onClick={handleReturnToUserPage} style={{ marginTop: '20px' }}>
                    Return to User Page
                </Button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>Ad send request</h1>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '15px'}}>
                    <Input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title"
                        required
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <Input
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                        required
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <Input
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Price"
                        required
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <FileInput
                        onChange={handleFileChange}
                        accept="image/*,application/pdf"
                    />
                    {file && <p>Selected file: {file.name}</p>}
                </div>
                <Button type="submit">Send Request</Button>
            </form>
            {showPreview && (
                <PreviewCard
                    title={title}
                    description={description}
                    price={price}
                    file={file}
                />
            )}
            <Button onClick={handleReturnToUserPage} style={{ marginTop: '20px' }}>
                Return to User Page
            </Button>
        </div>
    );
};

export default AdSendRequestPage;
