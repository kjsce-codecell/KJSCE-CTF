import wave

def extract_and_save_data(input_wav_file, output_file):
    cover_wav = wave.open(input_wav_file, mode='rb')
    
    frames = bytearray(cover_wav.readframes(cover_wav.getnframes()))
    
    data_ex = []
    value = 0

    j = 0
    for i in range(0, len(frames), 2):
        data_bit = frames[i] & 1
        value |= data_bit << j % 8
        j += 1
        if j % 8 == 0:
            data_ex.append(value)
            value = 0

    extracted_data = ''.join([chr(byte) for byte in data_ex])
    
    with open(output_file, 'wb') as file:
        file.write(extracted_data.encode('utf-8'))

    print("Extracted data saved to", output_file)

input_wav_file = "Strange.wav"
output_file = "extracted_data.txt"
extract_and_save_data(input_wav_file, output_file)
