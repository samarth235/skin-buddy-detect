# 🧠 DermAI Diagnostics

**Skin Disease Screening System using Deep Learning**

DermAI Diagnostics is a **computer vision–based skin disease screening system** that classifies dermatological conditions from images using a **transfer-learning based Xception CNN model**.
The system allows users to upload images of skin conditions and receive **AI-based predictions along with confidence scores**.

> Designed as an **academic + engineering project** demonstrating applied deep learning techniques in healthcare applications.

---

# 🔍 Problem Statement

Early identification of skin diseases is difficult due to:

* Visual similarity between dermatological conditions
* Limited access to dermatologists in many regions
* Subjective nature of manual diagnosis

This project aims to provide a **preliminary AI-assisted screening tool** that can analyze skin images and assist in identifying possible conditions.

---

# 💡 Key Highlights

* Implemented **Xception CNN architecture** using transfer learning
* Built a **multi-class skin disease classification system**
* Developed a **web-based interface for image upload and prediction**
* Provided **confidence-based prediction output**
* Deployed the application using **Firebase Hosting**

---

# 🧪 Diseases Classified

The model currently classifies the following dermatological conditions:

* Acne
* Eczema
* Psoriasis
* Ringworm
* Melanoma

---

# 🧠 Machine Learning Model

The classification model is built using **Xception**, a deep convolutional neural network architecture designed for efficient feature extraction using **depthwise separable convolutions**.

## Model Architecture

* **Base Model:** Xception (Pre-trained on ImageNet)
* **Transfer Learning:** Used to adapt the model for dermatological classification
* **Input Size:** 299 × 299 RGB images
* **Feature Extraction:** Depthwise separable convolution layers
* **Pooling Layer:** Global Average Pooling
* **Classifier:** Dense fully connected layers
* **Output Layer:** Softmax activation for multi-class classification

## Training Details

* **Loss Function:** Categorical Cross-Entropy
* **Optimizer:** Adam
* **Output:** Probability distribution across disease classes
* **Prediction:** Disease class with the highest confidence score

---

# 📊 Dataset

The model was trained using publicly available dermatology datasets.

## 1️⃣ HAM10000 Dataset

* **Total Images:** 10,015
* **Type:** Dermatoscopic images of skin lesions
* **Categories:** 7 lesion types
* **Source:** International Skin Imaging Collaboration (ISIC)

## 2️⃣ ISIC Skin Lesion Dataset

* **Total Images:** ~25,000+
* **Content:** Dermatological images including melanoma and other lesions
* **Use Case:** Training and evaluation of deep learning dermatology models

## Dataset Processing

Images were preprocessed before training:

* Resized to **299 × 299**
* Normalized pixel values
* Applied **data augmentation** techniques:

  * Image rotation
  * Horizontal flipping
  * Zoom augmentation
  * Brightness adjustments

## Dataset Split

* **Training Set:** 70%
* **Validation Set:** 15%
* **Test Set:** 15%

---

# ⚙️ Tech Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* Vite

## Machine Learning

* Python
* TensorFlow
* Keras
* NumPy
* Pandas

## Deployment

* Firebase Hosting
* GitHub

---

# 📂 Project Structure

```
skin-buddy-detect/
│
├── skin-buddy-clean/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── lib/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── firebase.json
├── .firebaserc
└── README.md
```

---

# ▶️ Running the Project

Clone the repository

```
git clone https://github.com/samarth235/skin-buddy-detect.git
cd skin-buddy-detect
```

Move into the frontend project

```
cd skin-buddy-clean
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 🏗️ Build for Production

```
npm run build
```

The production build will be generated in:

```
dist/
```

---

# 🌐 Deployment

The project is deployed using **Firebase Hosting**.

Deploy using:

```
firebase deploy
```

Live Application:

```
https://ai-skin-disease-detector-76e8d.web.app
```

---

# 📊 Output Provided

The system provides:

* Predicted skin disease
* Confidence score for prediction
* AI-based classification results
* User-friendly interface for analysis

---

# ❌ Limitations

* Limited number of disease classes
* Model performance depends on image quality
* Dataset imbalance may affect prediction accuracy
* Not intended to replace medical diagnosis

---

# 🔮 Future Scope

* Expand dataset with additional dermatological conditions
* Improve model accuracy using larger datasets
* Add mobile application support
* Integrate dermatologist consultation features
* Generate automated diagnostic reports

---

# ⚠️ Disclaimer

This project is intended **only for educational and research purposes**.
It should **not be used as a substitute for professional medical diagnosis**.
